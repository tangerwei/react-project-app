import React, { Component } from 'react';
import { Table, Button, Icon, Spin, Alert } from 'antd';
class DTable extends Component {
    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
        this.state = {
            data: [],
            columns: [{
                title: '文件名',
                dataIndex: 'name',
                key: 'name',
            }, {
                title: '类型',
                dataIndex: 'dtype',
                key: 'dtype',
            }, {
                title: '大小',
                dataIndex: 'size',
                key: 'size',
            }, {
                title: "操作",
                key: 'action',
                render: (text, record) => (
                    <span>
                        <Button type="danger" onClick={() => this.handleDelete(record.docid)}>
                            <Icon type="delete" />Delete
                        </Button>
                    </span>
                )
            }],
            onLoading: true
        }
    }
    handleDelete(docid) {
        var { data: nd } = this.state;
        nd = nd.filter((t) => (t.docid !== docid));
        this.setState({
            data: nd
        })
    }
    componentDidMount() {
        getData((data) => {
            this.setState({ data, onLoading: false });
            return true;
        })
    }
    render() {
        const { data, columns, onLoading } = this.state;
        const mdata = data.map((t, i) => {
            return { ...t, key: i.toString(), size: computedSize(t.size) };
        })
        return (
            <div>
                <h1>表格数据异步加载</h1>
                {onLoading === true ? (<Spin tip="Loading...">
                    <Alert
                        message="文档"
                        description="文档列表数据加载中."
                        type="info"
                    />
                </Spin>) : <Table dataSource={mdata} columns={columns} onLoading />}
            </div>
        )
    }
}
function computedSize(size) {
    return size > 1024 ? ((size / 1024).toFixed(2) + "M") : (size + "K");
}
function getData(callback) {
    var mdata = [{
        name: "xtc",
        dtype: "txt",
        size: 448,
        docid: "sssaa92991"
    }, {
        name: "xtc",
        dtype: "txt",
        size: 10148,
        docid: "sssaa92992"
    }, {
        name: "xtc",
        dtype: "txt",
        size: 14018,
        docid: "sssaa92993"
    }, {
        name: "xtc",
        dtype: "txt",
        size: 40148,
        docid: "sssaa92994"
    }];
    setTimeout(function () {
        callback(mdata)
    }, 2000)
}
export default function (props) {
    return (<DTable />)
}