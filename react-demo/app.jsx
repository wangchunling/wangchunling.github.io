var Couponlist = React.createClass({
    getDefaultProps:function(){
        return { data : [
            {oid:123456,count:20,price:30,date:'2015-01-01'},
            {oid:123458,count:30,price:40,date:'2015-01-02'},
            {oid:123457,count:40,price:50,date:'2015-01-03'}
        ]}
    },
    render:function(){
        return (
            <div className = "djq-list-box over-hide">
                <CouponListTitle/>
                <CouponListBody {...this.props}/>
                <CouponButton {...this.props} />
            </div>
        )
    }
});
var CouponListTitle = React.createClass({
    render:function(){
            return (
                <div className="djq-tit mt-04 mb-04">
                    <div className="bgc-blue white ta-c d-ib text">代金券</div>
                </div>
            )
    }
});
var CouponListBody = React.createClass({
    render:function(){
        var items = [];
        for(var i=0;i<this.props.data.length;i++){
            items.push(
                <CouponListBodyItem {...this.props.data[i]}  key = {i}/>
            );
        }
        return (
            <div>
                {items}
            </div>
        )
    }
});
var CouponListBodyItem = React.createClass({
    getInitialState:function(){
        return {checkbox:true}
    },
    checkHandle:function(){
        this.setState({
            checkbox:!this.state.checkbox
        })
    },
    render:function(){
       return(
           <div className="djq-list">
               <h2 className="mt-04 mb-02 grey">订单编号：{this.props.oid} <span className="fr d-ib w-25 ta-c">订单状态</span></h2>
               <div className="list-item">
                   <div className="w-75 d-ib">
                       <img className="img" src="http://s.fxtrips.com/2015-03/3b6eb31064dbaa81a128541cb4ecf9fa.jpg" />
                       <p>my demo </p>
                       <p>数量：<span className="orange">{this.props.count}</span>  金额：<span className="orange">￥{this.props.price}</span></p>
                       <p>有效期至 <span className="orange">{this.props.date}</span></p>
                   </div>
                   <div className="w-25 d-ib">
                       <div className="btn-group">
                           <p>
                               <span onClick={this.checkHandle} className={this.state.checkbox ? 'span-radius d-ib' : 'span-radius d-ib on'}></span>
                           </p>
                       </div>
                   </div>
               </div>
           </div>
       )
    }
});
var CouponButton = React.createClass({
    FormData:function(){
       console.log(this.props)
    },
    render:function(){
        return (
            <div className="ta-c mb-04">
                <span onClick={this.FormData} className="large-btn bgc-orange white">支付</span>
            </div>
        )
    }
});
React.render(<Couponlist/>,document.getElementById('example'));
