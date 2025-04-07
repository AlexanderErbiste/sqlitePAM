import react from "react";
import { Button, View } from "react-native"
import * as SQLite from 'expo-sqlite';


// componentes

 const Banco = ()=>{

    async function criaDatabase(){
        const db = await SQLite.openDatabaseAsync('PAM2');
        if(db){
            console.log('banco criado');
        }else{
            console.log('erro');
        }
    }

    return(
        <View>
            <Button
            title="Create Banco"
            onPress={criaDatabase}
            />
        </View>
    )
 }
 export default Banco;