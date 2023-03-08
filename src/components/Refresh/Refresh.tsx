const Refresh = (): JSX.Element => {

  function refreshPage() {
  window.location.reload();
  }
  
  return (
  <div>
  <button onClick={refreshPage}>Click to reload!</button>
  </div>
  );
  }
  
  export default Refresh;
  
  
  
  
  
  