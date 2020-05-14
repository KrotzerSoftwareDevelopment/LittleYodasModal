import { Modal } from "react-bootstrap";

class Modals extends Component {

  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: null
    };
  }

  handleClose() {
    this.setState({show: id});
  }

  handleShow(id) {
    this.setState({show: id});
  }

  render() {
    return (
      <div className="App">

        <Grid>
          <Row>
            <Col xsOffset={1} sm={5}>
              <Button bsStyle="primary" bsSize="large" onClick={() => this.handleShow('here')}>
                <h1>You are here!</h1>
              </Button>
              // eslint-disable-next-line react/react-in-jsx-scope
              <Modal 
              show={this.state.show == 'here'} onHide={this.handleClose}
              >
                <Modal.Header closeButton closeLabel="close window">
                </Modal.Header>
                <Modal.Body>
                  <p className='landing-page-markers you-are-here'>Tired of toy projects, tutorials and online courses?
                      <img src={logo} className="App-logo" alt="logo" />
                  </p>
                </Modal.Body>
              </Modal>
            </Col>
          </Row>
        </Grid>
      </div>
      );
    }
  }

export default Modals;