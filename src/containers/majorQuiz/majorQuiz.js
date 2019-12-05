import React,{Component} from 'react';
import Content from '../../hoc/PageContent';
import SidePanel from "../../hoc/Layout/Side-Panel";
import Main from "../../hoc/Layout/Main";
import QuizContent from "./quizContent";

class MajorQuiz extends Component{
    render(){
        return(
            <Content>
                <SidePanel/>
                <Main>
                    <QuizContent/>
                </Main>
            </Content>
        )
    }
}