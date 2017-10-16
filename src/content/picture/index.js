import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card } from 'antd';
class Pictures extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pictures: []
        }
    }
    componentDidMount() {
        this.setState({
            pictures: [{
                title: "动漫人物",
                children: [{
                    src: "http://t1.mmonly.cc/uploads/tu/201710/9999/rn46268f1f73.jpg"
                }, {
                    src: "http://t1.mmonly.cc/uploads/tu/201709/9999/rn3fa617ad0f.jpg"
                }, {
                    src: "http://t1.mmonly.cc/uploads/tu/201709/9999/rn88fcefb8e8.jpg"
                }, {
                    src: "http://t1.mmonly.cc/uploads/tu/201708/9999/rnbd300234ea.jpg"
                }]
            }, {
                title: "超级英雄",
                children: [{
                    src: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=535593896,4158703106&fm=27&gp=0.jpg"
                }, {
                    src: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1553229337,260979838&fm=27&gp=0.jpg"
                },{
                    src:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3041246569,2532321105&fm=27&gp=0.jpg"
                },{
                    src:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2804087014,4202869777&fm=27&gp=0.jpg"
                }]
            }]
        })
    }
    render() {
        const { pictures } = this.state;
        return (<div>
            <h1>本模块是异步加载</h1>
            {pictures.map((t, i) => (
                <Picture {...t} key={i} />
            ))}
        </div>)
    }
}

function Picture(props) {
    const { children } = props;
    return <Card title={props.title || "title"} noHovering style={{ marginTop: 10, marginBottom: 10 }}>
        {children.map((t, j) => (
            <Card.Grid style={{ width: 300, marginLeft: 10, marginRight: 10 }} key={"cdgrid" + j}>
                <div className="custom-image">
                    <img alt="example" width="100%" src={t.src} />
                </div>
            </Card.Grid>
        ))}
    </Card>
}

function PictureContainer(props) {
    return <Pictures {...props} />
}

function mapStateToProps(state, ownprops) {
    const { user } = state;
    return {
        user
    }
}

export default connect(mapStateToProps)(PictureContainer);