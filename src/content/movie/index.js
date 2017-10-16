import React, { Component } from 'react';
import { Card, Button, Modal } from 'antd';

class Movies extends Component {
    constructor(props) {
        super(props);
        this.handlePlay = this.handlePlay.bind(this);
        this.state = {
            displayWay: "0",
            onLoading: true,
            data: [],
            playVisible: false,
            playerUrl: ""
        }
    }
    getNewData(page, callback) {
        this.setState({
            onLoading: true
        });
        requestMovieList((data) => callback(data));
    }
    handlePlay(src) {
        this.setState({
            playVisible: true,
            playerUrl: src
        })
    }
    closePlayer() {
        this.setState({
            playVisible: false
        })
    }
    componentDidMount() {
        this.getNewData(0, (data) => this.setState({ data, onLoading: false }));
    }
    render() {
        const { data } = this.state;
        return (
            <div>
                <Card title={"Movie"} noHovering style={{ marginTop: 10, marginBottom: 10 }}>
                    {data.map((t, i) => (
                        <Card.Grid style={{ width: 300, marginLeft: 10, marginRight: 10 }} key={"cdgrid" + i}>
                            <div className="custom-image">
                                <img alt="example" width="100%" src={t.pic} />
                            </div>
                            <div className="custom-card">
                                <span style={{ marginRight: 10 }}>{t.text.title}</span>
                                <Button type="primary" icon="play-circle" onClick={() => this.handlePlay(t.src)}>播放</Button>
                                <p>导演：{t.text.director}</p>
                                <p>简介：{t.text.info}</p>
                            </div>
                        </Card.Grid>
                    ))}
                </Card>
                <Modal
                    title="Player"
                    visible={this.state.playVisible}
                    footer={null}
                    maskClosable={false}
                    onCancel={() => this.closePlayer()}
                >
                    <div>
                        <embed src={this.state.playerUrl} allowFullScreen="true" quality="high" width="480" height="350" align="middle" type="application/x-shockwave-flash"></embed>
                    </div>
                </Modal>
            </div>
        )
    }
}
//<embed src="" allowFullScreen="true" quality="high" width="480" height="350" align="middle" allowScriptAccess="always" type="application/x-shockwave-flash"></embed>
function requestMovieList(callback) {
    const dataA = [{
        movieId: "sifja",
        pic: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1553229337,260979838&fm=27&gp=0.jpg",
        src: "http://player.video.qiyi.com/418d9401ba314acdb5c51cf558de729f/0/0/v_19rrfwl0dk.swf-albumId=153503300-tvId=153503300-isPurchase=2-cnId=1",
        text: {
            title: "钢铁侠3",
            director: "沙恩·布莱克",
            info: "《钢铁侠3》是《钢铁侠》系列电影第三部，是由美国漫威影业公司出品的科幻动作电影，由沙恩·布莱克执导，小罗伯特·唐尼、格温妮丝·帕特洛、唐·钱德..."
        },
    },{
        movieId: "sageqwt",
        pic: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=426256687,475123626&fm=27&gp=0.jpg",
        src:"http://player.video.qiyi.com/754ac99101a30caa274446cd68caa8c7/0/0/w_19rrwdgiix.swf-albumId=4072716709-tvId=4072716709-isPurchase=0-cnId=10",
        text: {
            title: "蚁人",
            director: "佩顿·里德",
            info: "《蚁人》（Ant-Man）是漫威影业出品的一部科幻动作电影，取材自漫威漫画，是漫威电影宇宙的第十二部电影、同时也..."
        }
    }];
    callback(dataA);
}

export default Movies