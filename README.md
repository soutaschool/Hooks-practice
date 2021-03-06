<<<<<<< HEAD
# Hello world
=======
# useReducerについて
srcの中にreducersというフォルダを作成  
**useReducerを使用するファイルで`import reducer from './reducer/~'`と記述しておきインポートしておく**  
### 記述方法
`const [state, dispatch] = useReducer(reducer, initialArg, init);`  
第一引数にreducerを渡す  
第二引数にデフォルトの状態をどうしたいのか？  
第三引数に初期化時に必要なもの  
**inputタグにはvalueを与えることが多い**  
`<input className="form-control" id="formEventTitle" value={title} onChange={e => setTitle(e.target.value)} />`  
**引数.target.value**を記述することで状態変化をすることができるようになる  
##### dispatchを記述することでreducer側のactionに引数を渡す
	dispatch({  
	type: CREATE_HOGE,  
	title,  
	body  
	})  

## reducerについて
##### 基本的な書き方  
	const hoge = (state, action) => {  
	switch (action.type) {  
	case'CREATE_HOGE':  
	その時に実行される処理を記述~  
	default: どれケースにも当てはまらないときの処理  
	}}  
また、アクションを定義するときは
**`const DELETE_EVENT = 'DELETE_EVENT';`**とすることで  
エラーをコンパイルしたときに防ぐことができる  
###### actionsファイルを作成して移植しておくことで管理しやすくする
### actionの中身
	action = {  
	type: ここでswitch文で利用するタイプを記述する必要がある  
	}  
**アクション処理の定義を記述するものである**

## mapメソッド
	state.map((event, index) => (
        	                <tr key={index}>
                	            <td>{event.id}</td>
                        	    <td>{event.title}</td>
                         	   <td>{event.body}</td>
                           	 <td><button type='button' className='btn btn-danger'>削除</button></td>
                      	  </tr>
                  	  ))  
とあったときにindexは**配列要素の数値インデックス**とユニークな数値となる

## filterメソッド
	var manyHoge = ['souta','sasaki','overlade','very','cool','beautiful]  
	const result  = manyHoge.filter(hoge => hoge.length > 6)  
	上記のように配列の文字が6文字以上のものに絞る  
	console.log(result)  
**配列の中身を限定できるようになる。** 
#### disablead属性
この属性を設定するとボタンの反応が無効化される  
**真偽値を設定すること入力していないでクリックするのを防ぐことができるようになる**  
`const unCreatable = title === '' || body === ''`  
タイトルかボディーどちらかがからである  

#### comfirm属性の応用
`const result = window.confirm('注意書き')`  
と記述することで削除の前にワンクッション作れる(**めっちゃ便利**)  

#### App.jsからstate={state}のように渡すときはcomponet側でもpropsの部分で{}でくくることが必要

## contextについて(Hooks前)
**データの送受信の際に使うコンポーネント**  
### 基本的な書き方(親)
App.js `<AppContext.Provider value={}>`のようになる  
### 受け取る側の書き方(子)  
		    <AppContext.Consumer>
	                {value => { return <div>{value}</div>}}
	            </AppContext.Consumer>  


## Hooksでの書き方
**useContextの利用**  
`const value = useContext(AppContext);`と使用するcontextを記述するだけでいい  
### contextを利用することで格段に渡しやすくなる！  
`<AppContext.Provider value={{ state, dispatch}}>`と記述することで必要な部分で利用することができるようになる  
受け取る側では`const {state, dispatch} = useContext(AppContext);`と記述することで**propsから受け取らなくなる**  

# reduxの使用  
### combineReducersについて
	import {combineReducers} from "redux";
	import events from "./events";
	export default combineReducers({events});  
これでeventsのreducerの作成をすることができるようになる  
**構造としてオブジェクトになる**  
reducerを作成したらreducer/index.jsでrootログとして設定することが多い  
ログの設定をしたら確認することが大切
設定したものをどのように使う？
