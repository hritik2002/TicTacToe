import React ,{useState} from 'react'
import {
  View,
  StyleSheet,
  TouchableOpacity,
  
} from 'react-native'

import {
  Text ,
  Container ,
  Content ,
  Header ,
  Body ,
  Title,
  Card ,
  H1 ,
  H3 ,
  Button ,

} from 'native-base'

import Icons from './component/Icons'
import Snackbar from 'react-native-snackbar'
import { Icon } from 'react-native-vector-icons/Icon'


const itemArray = new Array(9).fill('empty') ;

const App =()=>{

  const [iscross,setIscross] = useState(false);  //So that every time we get different value i.e 0 or 1
  const [winMessage, setWinMessage] = useState('');

  const changeItem = (itemNumber)=>{

    if(winMessage){
      return Snackbar.show({
        text: winMessage ,
        backgroundColor : "green" ,
        textColor : "#fff",
      })
    }

    if(itemArray[itemNumber] === 'empty'){
      itemArray[itemNumber] = iscross ? 'cross' : 'circle' ;
      setIscross(!iscross) ;
    }
    else{
      return Snackbar.show({
        text: "Position is already filled",
        backgroundColor: "red" ,
        textColor : "#fff" 
      })
    }

    checkIsWinner() ;


  }

  const reloadGame = ()=>{
    setIscross(false);
    setWinMessage('');
    itemArray.fill('empty',0 , 9);

  }

  const checkIsWinner = ()=>{ 

    if(
      (itemArray[0] === itemArray[1]) &&  (itemArray[1] === itemArray[2]) && (itemArray[0] !='empty' )
    ){
      setWinMessage(`${itemArray[0]} won`)
    }

    else if(
      (itemArray[3] === itemArray[4]) &&  (itemArray[4] === itemArray[5]) && (itemArray[3] !='empty' )
    ){
      setWinMessage(`${itemArray[3]} won`)
    }

    else if(
      (itemArray[6] === itemArray[7]) &&  (itemArray[7] === itemArray[8]) && (itemArray[6] !='empty' )
    ){
      setWinMessage(`${itemArray[6]} won`)
    }

    else if(
      (itemArray[0] === itemArray[4]) &&  (itemArray[4] === itemArray[8]) && (itemArray[0] !='empty' )
    ){
      setWinMessage(`${itemArray[0]} won`)
    }

    else if(
      (itemArray[2] === itemArray[4]) &&  (itemArray[4] === itemArray[6]) && (itemArray[2] !='empty' )
    ){
      setWinMessage(`${itemArray[2]} won`)
    }

    else if(
      (itemArray[0] === itemArray[3]) &&  (itemArray[3] === itemArray[6]) && (itemArray[0] !='empty' )
    ){
      setWinMessage(`${itemArray[0]} won`)
    }

    else if(
      (itemArray[1] === itemArray[4]) &&  (itemArray[4] === itemArray[7]) && (itemArray[1] !='empty' )
    ){
      setWinMessage(`${itemArray[1]} won`)
    }

    else if(
      (itemArray[2] === itemArray[5]) &&  (itemArray[5] === itemArray[8]) && (itemArray[2] !='empty' )
    ){
      setWinMessage(`${itemArray[2]} won`)
    }
    else if(itemArray.every((item)=>{
        return item!='empty' 
    })){
      setWinMessage(` Draw `)
    }

  }




  return(
    <>
      <Container style={{backgroundColor:"#333945", paddingVertical:5}} >
        <Header>
          <Body>
            <Title>TicTacToe Game</Title>
          </Body>
        </Header>
        <Content>
          <View style={styles.grid} >

          {itemArray.map((item,index)=>(
            <TouchableOpacity
            style={styles.box}
            key={index}
            onPress={()=>{
              changeItem(index) ;
            }}
            >
              <Card style={styles.card}>
              <Icons name={item} />
              </Card>
            </TouchableOpacity>
          ))}

        </View>
          {winMessage ? (
            <View>
              <H1 style={styles.message}>{winMessage}</H1>
              <Button
              onPress={reloadGame}
              primary
              block
              rounded
              >
                <Text>Reload Game</Text>
              </Button>
            </View>
          ): (
            <H3 style={styles.message}>
              {iscross ? 'Cross' : 'Circle'} turns
            </H3>
          )}
        </Content>
      </Container>
    </>
  )
}

export default App;



const styles = StyleSheet.create({
  grid:{
    flex:1 ,
    flexDirection : "row" ,
    flexWrap :"wrap" ,
    marginTop : 20 ,
  },
  box: {
    width:"33%",
    marginBottom: 6,
  },
  card: {
    height: 120,
    justifyContent:"center" ,
    alignItems: "center",
  },
  message:{
    textAlign: "center",
    textTransform : "uppercase",
    color : "#FFF",
    marginTop : 20 ,
    backgroundColor: "#4652b3" ,
    paddingVertical: 10 ,
    marginVertical : 10
  }
})


/*
<Container style={{backgroundColor:"#333945", paddingVertical:5}} >
      <Header>
        <Body>
          <Title >
            Tic Tac Toe
          </Title>
        </Body>
      </Header>
      <Content>
        <View style={styles.grid} >

          {itemArray.map((item,index)=>(
            <TouchableOpacity
            style={styles.box}
            key={index}
            onPress={()=>{
              changeItem(index) ;
            }}
            >
              <Card style={styles.card}>
              <Icons name={item} />
              </Card>
            </TouchableOpacity>
          ))}

        </View>

        {winMessage ? (
          <View>
            <H1 style={styles.message}>{winMessage}</H1>
            <Button
            onPress={reloadGame}
            primary
            block
            rounded
            >
              <Text>Reload Game</Text>
            </Button>
          </View>
        ): (
          <H3 style={styles.message}>
            {iscross ? 'Cross' : 'Circle'} turns
          </H3>
        )}
      </Content>

    </Container>
*/
