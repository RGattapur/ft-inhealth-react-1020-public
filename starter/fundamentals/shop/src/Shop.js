import React, { Component } from "react";
import {Panel} from "./Panel";

class Shop extends Component {

    render() {

        const {basket} = this.props;

        return (
            <section className="shop">
                {basket.map((name,n) => <Panel key={n} desc={name} /> )}
            </section>
        );
    }
}

export default Shop;