
import React, { Component } from "react";

class Panel extends Component {

    render() {
        const {desc} = this.props;

        return (
            <section className="panel">
                <h2>0</h2>
                <h4>{desc}</h4>
                <p>Up</p>
                <p>Down</p>
            </section>
        )
    }
}

export {Panel}
