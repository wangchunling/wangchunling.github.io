/**
 * Created by wcl_fxtrip on 2015/11/10.
 */
import React from 'react';
import CouponListBodyItem from './CouponListBodyItem'
var CouponListBody = React.createClass({
    render: function() {
        var items = [];
        for (var i = 0; i < this.props.data.length; i++) {
            var item = this.props.data[i]
            items.push(
                <CouponListBodyItem key = {item.oid} {...item} checked={!!this.props.chosen[item.oid]}
                                    checkHandle={this.props.checkHandle}/>
            );
        }

        return (
            <div>
                {items}
            </div>
        );
    }
});
export default CouponListBody;