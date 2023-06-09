
const EventComponent: React.FC = () => {

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event)
  }

  const onDragStart = (event: React.DragEventHandler<HTMLDivElement>) => {
    console.log('I`m being Dragged')
  }
  
  return <div>
    <input type="text" onChange={onChange} />
    <div draggable onDragStart={onDragStart}>Drag Me</div>
  </div>
}

export default EventComponent;