import React, {useState, useEffect, useRef} from 'react';
import { Grid } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Typography } from '@material-ui/core';
import { TextareaAutosize } from '@material-ui/core';
import { Button } from '@material-ui/core';
import * as tf from '@tensorflow/tfjs-core';
require('@tensorflow/tfjs');
const use = require('@tensorflow-models/universal-sentence-encoder');

function Text({userid}) {
	const [text1, setText1] = useState('');
	const [text2, setText2] = useState('');
	const [scores, setScores] = useState(0);
	const [isloaded, setIsloaded] = useState(true);
	const didMount = useRef(false);

	useEffect(() => {
		if (didMount.current) {
      		fetch('https://fathomless-journey-15048.herokuapp.com/api/scores', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                    	uid: userid,
                        scores: scores
                    })
            	})
            	.then(response =>response.json())
            	.then(data => {
                	alert('The score of: ' + scores +' has been added!');
        		})
    	} else {
      		didMount.current = true;
      	}
    }, [scores,userid])

	const embed = function () {
		setIsloaded(false);
		if (text1.length > 0 && text2.length > 0){
			// Load the model.
			use.load().then(model => {
				// Embed an array of sentences.
  				model.embed([text1,text2])
  				.then(embeddings => {
  				 const score =	tf.matMul(
                	tf.slice(embeddings, [0, 0], [1]),
                	tf.slice(embeddings, [1, 0], [1]), false, true)
              		.dataSync();
              	setScores(parseFloat(score[0].toFixed(4)));
              	setIsloaded(true);
  				});
  			});
		} else {
			alert('Please say something!');
			setScores(0);
		}

	}

  	return (
    	<Grid container direction="row" justifyContent="center" alignItems="center">
  			<Card>
                <CardContent>
                    <Typography variant="body1">
                        This is excited! 
                        Type in something in the two boxes below and we will help you find how similar these messages are.
                    </Typography>
                </CardContent>
                <CardContent>
                    <TextareaAutosize
  						maxRows={4}
  						style={{maxWidth: "100%"}}
  						aria-label="maximum height"
  						placeholder="The first word, sentence or paragraph here"
  						onChange={(event) => setText1(event.target.value)}
					/>
                </CardContent>
                <CardContent>
                	<TextareaAutosize
  						maxRows={4}
  						style={{maxWidth: "100%"}}
  						aria-label="maximum height"
  						placeholder="The second word, sentence or paragraph here"
  						onChange={(event) => setText2(event.target.value)}
					/>
                </CardContent>
                <div justifyContent="center" alignItems="center">
                    <Button variant="contained" style ={{color:"#2196f3"}} onClick={() => embed([text1,text2])}>
                    	Detect!
                    </Button>
                </div>
                {isloaded
                	? <CardContent>
                    		<Typography variant="body1">
                        		They are {scores*100} % simialr!
                    		</Typography>
                	  </CardContent>
	    			: <CardContent>
                    		<Typography variant="body1">
                        		We know it takes a while but just a second...
                    		</Typography>
                	  </CardContent>
	    		}
            </Card>
        </Grid>
  );
}

export default Text;