import React from 'react'
import Paragraph from './Paragraph'
import './Chapter.css'
import axios from 'axios'
import {dateFormat} from '../utils/date'

class Chapter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            paragraphs: [],
            time: ''
        };
        this.getContent();
        this.getTime();
    }
    getTime(){
        this.state.time = dateFormat("HH:MM", new Date())
    }

    getContent() {
        //
        var chapter_id = '00001389-e17f-50b7-a71a-73c55bb5e1ea';
        axios.get('https://1605199926208221.cn-shanghai.fc.aliyuncs.com/2016-08-15/proxy/novel_reader_serveless/novel_reader_serveless/?chapterid=' + chapter_id)
            .then(res => {
                this.setState({
                    'title': res.data.title,
                    'paragraphs': JSON.parse(res.data.content.replace(new RegExp("'", 'g'), "\""))
                });
            })
    }


    render() {
        return (
            <div className="chapter">
                <div className="chapter-head">{this.state.title}</div>
                <div className="chapter-content">
                    {
                        this.state.paragraphs.map((value, key) => {
                            return <Paragraph key={key} content={value}/>
                        })
                    }
                </div>
                <div className="chapter-foot">{this.state.time}</div>
            </div>
        );
    }


}

// https://1605199926208221.cn-shanghai.fc.aliyuncs.com/2016-08-15/proxy/novel_reader_serveless/novel_reader_serveless/?chapterid=12121
export default Chapter;