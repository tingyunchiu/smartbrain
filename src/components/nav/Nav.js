import React from 'react';


function Nav({isLogin, ChangeLogin}) {
	if (isLogin) {
		return <button onClick={() => ChangeLogin((!isLogin))}> Sign Out </button>
	}
	return (
		<button onClick={() => ChangeLogin((!isLogin))}> Sign in </button>
  	)
}

export default Nav;