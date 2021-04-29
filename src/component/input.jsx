
function Inputfield(props) {
 return <input className="Inputfield" key={"id"} value={props.value} type="text" placeholder={props.placeholder} onChange={props.onChange}/>  
}
export default Inputfield