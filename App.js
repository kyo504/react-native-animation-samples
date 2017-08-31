import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

import MainScreen from './js/MainScreen';
import TimingAnimation from './js/TimingAnimation';
import StaggerAnimation from './js/StaggerAnimation';
import SpringAnimation from './js/SpringAnimation';
import SpinningAnimation from './js/SpinningAnimation';
import SequenceAnimation from './js/SequenceAnimation';
import ParallelAnimation from './js/ParallelAnimation';
import DecayAnimation from './js/DecayAnimation';
import TinderAnimation from './js/TinderAnimation';
import DragAnimation from './js/DragAnimation';
import BounceAnimation from './js/BounceAnimation';
import CompositeAnimation from './js/CompositeAnimation';
import EasingAnimation from './js/EasingAnimation';
import ChasingAnimation from './js/ChasingAnimation';

const AppNavigator = StackNavigator({
  MainScreen: { screen: MainScreen },
  TimingScreen: { screen: TimingAnimation },
  StaggerScreen: { screen: StaggerAnimation },
  SpringScreen: { screen: SpringAnimation },
  SpinningScreen: { screen: SpinningAnimation },
  SequenceScreen: { screen: SequenceAnimation },
  ParallelScreen: { screen: ParallelAnimation },
  DecayScreen: { screen: DecayAnimation },
  TinderScreen: { screen: TinderAnimation },
  DragScreen: { screen: DragAnimation },
  BounceScreen: { screen: BounceAnimation },
  CompositeScreen: { screen: CompositeAnimation },
  EasingScreen: { screen: EasingAnimation },
  ChasingScreen: { screen: ChasingAnimation },
});

export default class App extends React.Component {
  render() {
    return <AppNavigator />;
  }
}
