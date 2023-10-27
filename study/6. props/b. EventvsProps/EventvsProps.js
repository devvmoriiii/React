const rootDiv = document.querySelector("#root")

function Container () {
  const  EventBtn = (props) => {
    function eventBtnClick() {
      console.log("This is event!");
    }
    return (
      <button 
      onClick={eventBtnClick}
      class={props.onClick}
      >
        event
      </button>
    )
  }
  return (
    <div>
    <EventBtn onClick={"This-is-props"} style={{color: "red"}}/>
  </div>
  )

}

ReactDOM.render(<Container />, rootDiv)

