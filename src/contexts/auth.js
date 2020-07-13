import React, { useState, createContext } from 'react';//sempre passar o createContext para criar o contexto
import firebase from '../services/firebaseConnection';

export const AuthContext = createContext({});

function AuthProvider({children}){

    //dados do usuario
    const [user, setUser] = useState(null);
    
    //funcao para logar usuario
    async function signIn(email, password){
        await firebase.auth().signInWithEmailAndPassword(email, password)
        .then(async (value) =>{
            let uid = value.user.uid;
            await firebase.database().ref('users').child(uid).once('value')
            .then((snapshot) => {
                let data ={
                    uid: uid,
                    nome: snapshot.val.nome,
                    email: value.user.email
                };
                setUser(data);
            })
        })
        .catch(() => {
            alert(error.code)
        })

    }

    //funcao cadastrar usuario
    async function signUp(email, password, nome){
        await firebase.auth().createUserWithEmailAndPassword(email, password)
        .then( async (value) => {
            let uid = value.user.uid;
            await firebase.database().ref('users').child(uid).set({
                nome: nome,
                saldo: 0
            })
            .then(() => {
                let data = {
                    uid: uid,
                    nome: nome,
                    email: value.user.email,
                };
                setUser(data);
            })
        })
        .catch(() => {
            alert(error.code)
        })
    }

    return(
        <AuthContext.Provider value={{ signed: !!user , user, signUp, signIn }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;