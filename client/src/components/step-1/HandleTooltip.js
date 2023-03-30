import Modal from "react-bootstrap/Modal";

function HandleTooltip(props) {
  let modalBody="";
if (props.clickedicon==="smartGoal") {
   modalBody=`
  <p><strong>SMART</strong> Goals</p>
  <p><strong>S</strong>pecific</p>
  <p><strong>M</strong>easurable</p>
  <p><strong>A</strong>chievable</p>
  <p><strong>R</strong>ealistic</p>
  <p><strong>T</strong>ime-based</p>
  `;
} else{
  modalBody=`<p> Defining the goal will help you determine what kind of information you
  need to make a decision</p>`;
}


	return (
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Define the goal.
            </Modal.Title>
          </Modal.Header>
          <Modal.Body
          dangerouslySetInnerHTML={{ __html: modalBody }} />
        </Modal>
      );
}
export default HandleTooltip;