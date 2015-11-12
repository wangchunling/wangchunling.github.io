/**
 * Created by wcl_fxtrip on 2015/11/10.
 */
import React from 'react';
var CouponListBodyItem = React.createClass({
    checkHandle: function() {
        console.log('item checkhandle');
        console.log(this.props.checked)
        this.props.checkHandle(this.props.oid);
    },

    render: function() {
        return (
            <div className="djq-list">
                <h2 className="mt-04 mb-02 grey">
                    订单编号：{this.props.oid}
                    <span className="fr d-ib w-25 ta-c">订单状态</span>
                </h2>
                <div className="list-item">
                    <div className="w-75 d-ib">
                        <img className="img" src="http://wangchunling.github.io/react-demo/demo1.jpg" />
                        <p>my demo </p>
                        <p>数量：<span className="orange">{this.props.count}</span> 金额：<span className="orange">￥{this.props.price}</span></p>
                        <p>有效期至 <span className="orange">{this.props.date}</span></p>
                    </div>
                    <div className="w-25 d-ib">
                        <div className="btn-group">
                            <p>
                                <span onClick={this.checkHandle}
                                      className={!this.props.checked ? 'span-radius d-ib' : 'span-radius d-ib on'}></span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});
export default CouponListBodyItem;