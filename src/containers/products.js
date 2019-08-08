import React from 'react';
import { connect } from 'react-redux';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
import { bindActionCreators } from "redux";
import {getProductListing} from '../actions/todo';
class Products extends React.Component {
    constructor(props) {
        super(props);
        this.state = { };
    }

    componentDidMount(){
        this.props.getProductListing();
    }

    render(){
        console.log(this.props.products);
        return(
            <div>
                <h1>Demo Products</h1>
                {
                    this.props.products.map(row =>
                        <Card>
              <CardImg height="200px" width="200px" src={row.image ? row.image.src : ''} alt="Card image cap" />
              <CardBody>
                <CardTitle>{row.title}</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText>{row.body_html}</CardText>
                <Button>Button</Button>
              </CardBody>
            </Card>
                        )
                }
            
          </div>
        );
    }
}
const mapStateToProps = (state) =>
    ({
        products: state.products
    });

const mapDispatchToProps = (dispatch) => ({
    getProductListing: bindActionCreators(getProductListing, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);