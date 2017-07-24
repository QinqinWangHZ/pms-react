// import { RECEIVE_PRODUCTS } from '../constants/ActionTypes'

// 初始化数据
const initialUserState = {
    name:'',
    age:0
};

const user = (state = initialUserState, action ) => {
	switch(action.type) {
		case 'FETCH_USER':
            return state = {...state,name:'caoxifeng',age:18}
		case 'FETCH_AGE':
            return state = {...state,name:'caoxifeng',age:28}
		default:
			return state;
	}
}


module.exports = user;




// return Object.assign({},{user:'caoxifeng',age:18});
