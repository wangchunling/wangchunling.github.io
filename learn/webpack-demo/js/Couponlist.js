/**
 * Created by wcl_fxtrip on 2015/11/10.
 */
import React from 'react';
import CouponListTitle from './CouponListTitle';
import CouponListBody from './CouponListBody';
import CouponButton from './CouponButton';
var Couponlist = React.createClass({
    getInitialState: function() {
        return {
            chosen: {}
        };
    },
    checkHandle: function(oid) {
        var chosen = this.state.chosen;
        if (chosen[oid]) {
            delete chosen[oid];
        } else {
            chosen[oid] = true;
        }

        this.setState({
            chosen: chosen
        });
        console.log(this.state.chosen)
    },
    doPay: function() {
        console.log("should pay for", Object.keys(this.state.chosen));
    },
    getDefaultProps: function() {
        return {
            data: [{
                oid: 123456,
                count: 20,
                price: 30,
                date: '2015-01-01'
            }, {
                oid: 123458,
                count: 30,
                price: 40,
                date: '2015-01-02'
            }, {
                oid: 123457,
                count: 40,
                price: 50,
                date: '2015-01-03'
            }]
        }
    },
    render: function() {
        return (
            <div className = "djq-list-box over-hide">
                <CouponListTitle/>
                <CouponListBody {...this.props} checkHandle={this.checkHandle} chosen={this.state.chosen}/>
                <CouponButton {...this.props} formData={this.doPay} />
            </div>
        )
    }
});
export default Couponlist;
