import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Container, Icon, Image, Menu, Grid } from 'semantic-ui-react';

class TopIcons extends React.Component {
  render() {
    return (
        <Menu borderless className="topicons">
          <Container>
            <Menu.Item position='right'><Icon size='large' name="facebook f"/></Menu.Item>
            <Menu.Item><Icon size='large' name="twitter"/></Menu.Item>
            <Menu.Item><Icon size='large' name="instagram"/></Menu.Item>
            <Menu.Item><Icon size='large' name="tripadvisor"/></Menu.Item>
          </Container>
        </Menu>
    )
  }
}

class TopMenu extends React.Component {
  render() {
    const itemStyle = { color: "white" };
    return (
        <Menu borderless className='topmenu'>
          <Container>
            <Menu.Item>
              <Image src="http://courses.ics.hawaii.edu/ics314s19/morea/ui-frameworks/formaggio-logo.png"/></Menu.Item>
            <Menu.Item style={itemStyle}>HOME</Menu.Item>
            <Menu.Item style={itemStyle}>MENU</Menu.Item>
            <Menu.Item style={itemStyle}>GALLERY</Menu.Item>
            <Menu.Item style={itemStyle}>EVENTS</Menu.Item>
            <Menu.Item style={itemStyle}>RESERVATION</Menu.Item>
            <Menu.Item style={itemStyle}>ABOUT US</Menu.Item>
            <Menu.Item style={itemStyle}>CONTACT</Menu.Item>
          </Container>
        </Menu>
    )
  }
}

class BottomPicture extends React.Component {
  render() {
    return (
        <Image size='fluid'
               src='http://courses.ics.hawaii.edu/ics314s19/morea/ui-frameworks/formaggio-wine-bottles.jpg'/>
    )
  }
}

class Formaggio extends React.Component {

  render() {
    return (
        <div>
          <TopIcons/>
          <TopMenu/>
          <BottomPicture/>
        </div>
    );
  }
}

ReactDOM.render(<Formaggio/>, document.getElementById('root'));
