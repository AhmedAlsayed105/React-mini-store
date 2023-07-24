import { Container ,Button, Image} from "react-bootstrap";
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from "react-redux";
import { deleteToCard ,clearAllCard } from "../rtk/card_slice";


function AppCards() {
  const cart = useSelector(state => state.cart)
  const dispatch  = useDispatch()
  const allCartPrice = cart.reduce((acc,cur) =>{
        return (acc + cur.price * cur.quantity )
  },0)
  console.log(allCartPrice.toFixed(2));
  return (
    <Container className="py-5">
      <h2> Welcome To Cards</h2>
    <Button className=" mt-5" onClick={() => dispatch(clearAllCard())}> Clear </Button>
        <h4 className="m-5">TotalPrice :{allCartPrice.toFixed(2)}$</h4>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Image</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
      {
        cart.map(product => {
          return(
            <tr key={product.id}>
            <td>{product.id}</td>
            <td >{product.title}</td>
            <td>{<Image src={product.image} alt="" style={{width:'100px',height:"100px"}}/>}</td>
            <td>{product.price}$</td>
            <td>{product.quantity}</td>
            <td><Button variant="danger" onClick={()=>dispatch(deleteToCard(product)) }>Delete</Button></td>
          </tr>
          )
        })
      }
      </tbody>
    </Table>
    </Container>
  );
}

export default AppCards;
