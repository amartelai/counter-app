import React, { Component } from 'react';
import Counter from './counter'

class Counters extends Component {

    render() {
        const { counters, onReset, onIncrement, onDecrement, onDelete } = this.props;

        return (

            <div>
                <button
                    onClick={onReset}
                    className="btn btn-primary btn-sm m-2">Reset</button>
                {
                    this.props.counters.map(counter => (
                        <Counter
                            key={counter.id}
                            counter={counter}
                            onDelete={onDelete}
                            onIncrement={onIncrement}
                            onDecrement={onDecrement}
                            onReset={onReset}
                        />

                    )
                    )
                }
            </div>
        )

    }

}

export default Counters;