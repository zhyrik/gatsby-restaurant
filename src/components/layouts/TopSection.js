import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import Fab from '@material-ui/core/Fab';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import styled from 'styled-components'

import Image1 from '../images/TopSection/top1'
import Image2 from '../images/TopSection/top2'
import Image3 from '../images/TopSection/top3'
import Image5 from '../images/TopSection/top5'

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const Wrap = styled.div`
  position: relative;
  min-height: 90vh;
  width: 100%;
  overflow: hidden;
  color: white;
`
const WrapInner = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
`
const WrapFab = styled.div`
  display: flex;
  justify-content: space-between;
`
const H1 = styled.h1`
  font-size: 6vw;
  font-weight: 900;
  padding: 0 15px;
`
const H3 = styled.h3`
  font-size: 3.5vw;
  font-weight: 300;
  padding: 0 15px;
`
const Button = styled.div`
  width: 17vw;
  height: 4vw;
  font-size: 1.7vw;
  line-height: 4vw;
  background: #EB4B4B;
  text-align: center;
  margin: 30px 15px;
  cursor: pointer;
  @media (max-width: 700px) {
    width: 37vw;
    height: 8vw;
    font-size: 4vw;
    line-height: 8vw;
  }
`

const styles = theme => ({
  root: {
    maxWidth: 1750,
    flexGrow: 1,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    paddingLeft: theme.spacing.unit * 4,
    backgroundColor: theme.palette.background.default,
  },
  img: {
    height: 255,
    display: 'block',
    maxWidth: 400,
    overflow: 'hidden',
    width: '100%',
  },
});

class SwipeableTextMobileStepper extends React.Component {
  state = {
    activeStep: 0,
  };

  handleNext = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep + 1,
    }));
  };

  handleBack = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep - 1,
    }));
  };

  handleStepChange = activeStep => {
    this.setState({ activeStep });
  };


  render() {
    const { classes, theme } = this.props;
    const { activeStep } = this.state;
    const maxSteps = 4;

    return (
      <Wrap className={classes.root}>
        <AutoPlaySwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={activeStep}
          onChangeIndex={this.handleStepChange}
          enableMouseEvents
        >
          <Image1 />
          <Image2 />
          <Image3 />
          <Image5 />
        </AutoPlaySwipeableViews>
        <WrapInner>
          <div className="container">
            <WrapFab className="row">
              <Fab size="small" onClick={this.handleBack} disabled={activeStep === 0}>
                {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
              </Fab>
              <Fab size="small" onClick={this.handleNext} disabled={activeStep === maxSteps - 1}>
                {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
              </Fab>
            </WrapFab>
            <div className="row justify-content-sm-end justify-content-center">
              <H1 >Welcome to Restaurant</H1>
            </div>
            <div className="row justify-content-sm-end justify-content-center">
              <H3>LOVES HEALTHY  FOOD</H3>
            </div>
            <div className="row justify-content-sm-end justify-content-center">
              <Button>ORDER NOW</Button>
            </div>
          </div>
        </WrapInner>
      </Wrap>
    );
  }
}


SwipeableTextMobileStepper.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(SwipeableTextMobileStepper);