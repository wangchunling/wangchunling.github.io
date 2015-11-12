/**
 * Created by wcl_fxtrip on 2015/11/10.
 */
import React from 'react';
import CouponListBodyItem from './CouponListBodyItem'
var CouponButton = React.createClass({
    formData:function(){
        this.props.formData();
    },
    render:function(){
        return (
            <div className="ta-c mb-04">
                <span onClick={this.formData} className="large-btn bgc-orange white">支付</span>
            </div>
        )
    }
});
export default CouponButton;