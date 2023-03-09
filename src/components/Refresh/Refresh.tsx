import './Refresh.css'

const Refresh = (): JSX.Element => {

  function refreshPage() {
  window.location.reload();
  }
  
  return (
    <div className='container'>
      <button className="button" onClick={refreshPage}>Reload</button>
    </div>
  );
}
  
export default Refresh;
  
  
  
  
  
  