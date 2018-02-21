import 'react-native';
import React from 'react';
//
import introscreen from '../src/screens/introscreen';

//
import renderer from 'react-test-renderer';

describe('IntroScreen Component', () => {
  it('should run a test to check a number', ()=>{
    const IntroScreenComponent = renderer.create(<introscreen/>).toJSON();
    expect(IntroScreenComponent).toMatchSnapshot();
  });
});
