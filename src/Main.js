import React from 'react';
import { SafeAreaView } from 'react-native';
import Header from '../src/component/header'
import Category from '../src/component/category'
import List from '../src/component/list'
import Add from './component/addPost/addButton'

export default function Main() {
  return (
    <SafeAreaView>
      <Header/>
       <Category/>
       <List/>
       <Add/>
     </SafeAreaView>
  );
}
