import React, {useState, useEffect, useRef} from 'react';
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
      		fetch('http://localhost:3001/api/scores', {
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
			setScores('0');
		}

	}

  	return (
    	<div>
    		<div>
    			<p> Please enter two sentences and end each sentence with a period.</p>
    		</div>
	    	<div style={{"padding": "20px"}} >
	    		<input type="text"
	    				style={{"height": "100px", "width": "400px"}}
	    				placeholder='The weather is nice today.'
	    				value={text1}
	    				onChange={(event) => setText1(event.target.value)} />
	    	</div>
	    	<div style={{"padding": "20px"}}>
	    		<input type="text"
	    				style={{"height": "100px", "width": "400px"}}
	    				placeholder='NBA is starting!'
	    				value={text2}
	    				onChange={(event) => setText2(event.target.value)} />
	    	</div>
	    	<div>
	    		<button onClick={() => embed([text1,text2])}> Detect </button>
	    	</div>
	    	<div>
	    		{isloaded ? <h2> Similar: {scores}</h2>
	    				 : <h2> Just a second...</h2>
	    		}
	    	</div>
    	</div>
  );
}

export default Text;