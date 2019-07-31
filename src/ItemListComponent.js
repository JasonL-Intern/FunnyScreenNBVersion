import React from 'react';
import Modal from './components/UI/Modal/Modal';

class ItemListComponent extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            // optionList: ["https://www.amazon.com", "https://www.netflix.com", "https://www.ted.com/#/", "https://www.youtube.com/"],
            optionList: ["//placekitten.com/1500/500",
                "//placekitten.com/4000/3000",
                "//placekitten.com/800/1200",
                "//placekitten.com/1500/1500"],
            selectOption: undefined,
            newUrl: "",
            newInterval: undefined,
            currentInterval: undefined,
            myWindow: undefined,
            loop: undefined,
            photoIndex: -1,
            isOpen: false,
            isClosed: false,
            showingPics: false,
            currentPic: undefined,
        };

    }

    handleChange = (event) => {
        this.setState({ selectOption: event.target.value });

    }

    handleChangeUrl = (event) => {
        this.setState({ newUrl: event.target.value });
    }

    handleInterval = (event) => {
        this.setState({ newInterval: event.target.value });
    }

    lightBoxOpenHandler = () => {
        this.setState({ showingPics: true });
    }

    lightBoxCloseHandler = () => {
        this.setState({ showingPics: false, });
        clearInterval(this.state.loop);
    }





    moveUpOption = () => {

        const index = this.state.optionList.indexOf(this.state.selectOption);
        if (index > 0) {
            let nextOptionList = [...this.state.optionList];
            let temp = nextOptionList[index - 1];
            nextOptionList[index - 1] = nextOptionList[index];
            nextOptionList[index] = temp;
            this.setState({
                optionList: nextOptionList
            })
        }
    }

    moveDownOption = () => {
        const index = this.state.optionList.indexOf(this.state.selectOption);
        if (index < this.state.optionList.length - 1) {
            let nextOptionList = [...this.state.optionList];
            let temp = nextOptionList[index + 1];
            nextOptionList[index + 1] = nextOptionList[index];
            nextOptionList[index] = temp;
            this.setState({
                optionList: nextOptionList
            })
        }
    }

    removeOption = () => {
        const index = this.state.optionList.indexOf(this.state.selectOption);
        let nextOptionList = [...this.state.optionList];
        if (index >= 0) {
            nextOptionList.splice(index, 1);
            this.setState({
                optionList: nextOptionList,
                selectOption: undefined
            })
        }
    }

    addOption = () => {
        let regexp = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
        if (regexp.test(this.state.newUrl)) {
            let nextOptionList = [...this.state.optionList];
            nextOptionList.push(this.state.newUrl);

            this.setState({
                optionList: nextOptionList,
                newUrl: ""
            })



        }
        else {
            alert("Wrong URL format");
        }
    }

    addInterval = () => {
        if (!isNaN(this.state.newInterval)) {
            let temp = this.state.newInterval;
            this.setState({
                currentInterval: temp,
                newInterval: ""
            })

        } else {
            alert("Not a number");
        }
    }

    navigate = () => {
        let i = 0;
        let urlList = [...this.state.optionList];
        this.setState({currentPic:urlList[0]});

        const loop = setInterval(() => {
            i++;
            if (i >= urlList.length) {
                i = 0;
            }
            this.setState({currentPic:urlList[i]});

        }, this.state.currentInterval * 1000);

        this.setState({
            loop: loop,
            showingPics: true,
        })
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-11">
                        <select
                            className="custom-select"
                            size="10"
                            value={this.state.selectOption}
                            onChange={this.handleChange}
                        >
                            {this.state.optionList.map((option, index) => {
                                return <option key={option} value={option}>{option}</option>

                            })}
                            }
                        </select>
                    </div>
                    <div className="col-1">
                        <button className="btn btn-light" style={{ marginTop: '30px' }} onClick={this.moveUpOption}>Up</button>
                        <button className="btn btn-light" style={{ marginTop: "30px" }} onClick={this.removeOption}>Delete</button>
                        <button className="btn btn-light" style={{ marginTop: "30px" }} onClick={this.moveDownOption}>Down</button>
                    </div>
                </div>

                <br></br>
                <br></br>

                <div className="row">
                    <div className="col-5">
                        <div className="form-group">
                            <input type="url"
                                className="form-control"
                                id="new-option"
                                placeholder="Add a new url"
                                value={this.state.newUrl}
                                onChange={this.handleChangeUrl}
                            />
                        </div>
                    </div>
                    <div className="col-2">
                        <button className="btn btn-light btn-block" onClick={this.addOption}>Add URL</button>
                    </div>
                    <div className="col-1">
                        <button className="btn btn-light btn-block" onClick={this.addInterval}>Set</button>
                    </div>
                    <div className="col-2">
                        <input
                            type="text"
                            className="form-control mb-2 mr-sm-2"
                            id="interval"
                            placeholder="Set Interval"
                            value={this.state.newInterval}
                            onChange={this.handleInterval}
                        />
                    </div>
                    <div className="col-2">
                        <p>current interval: {this.state.currentInterval}s</p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-3">
                        <button className="btn btn-light btn-block">Save List</button>
                    </div>
                    <div className="col-3">
                        <button className="btn btn-light btn-block">Load list</button>
                    </div>
                </div>
                <br></br>
                {/* <button className="btn btn-dark btn-lg btn-block" onClick={()=>this.setState({isOpen:true,isClosed:false})} >Launch</button> */}
                <Modal show={this.state.showingPics} modalClosed={this.lightBoxCloseHandler} imgSrc={this.state.currentPic} />
                <button className="btn btn-dark btn-lg btn-block" onClick={this.navigate} >Launch</button>

            </div>
        );
    }
}

export default ItemListComponent;