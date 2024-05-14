import React, { useEffect, useState } from 'react';
import { Container,Input ,Button,ContainerPosts,ContainerInputBtn,ContainerPostBtn} from './App.styled'


function App() {
  const [posts,setPosts]=useState<{post:string,hour:number,minut:number}[]>([]);
  const [inputText,setInputText]=useState<string>("");
  function savePosts (){
    const time=new Date();
    const hours=time.getHours();
    const minuts=time.getMinutes();
      setPosts([...posts,{post:inputText,hour:hours,minut:minuts}]);
  }
  function deletPost(index:number){
    const newArr:{post:string,hour:number,minut:number}[]=[];
      for(var i=0;i<posts.length;i++){
        if(index===i){
          continue;

        }
        else {
          newArr.push(posts[i]);
        }
      }
      setPosts(newArr);
  }
  return (
    <Container>
      <ContainerInputBtn>
      <Input onChange={(e)=>setInputText(e.target.value)}></Input>
      <Button onClick={savePosts}>post</Button>
      </ContainerInputBtn>
      {posts.map((post,index)=>(
      <ContainerPostBtn>
        <ContainerPosts>
           <p>{post.post}-</p>
           <p>{post.hour}:</p>
           <p>{post.minut}h</p>
        </ContainerPosts>
        <Button onClick={()=>deletPost(index)}>cancel</Button>
      </ContainerPostBtn>
        
      ))}
    </Container>
    
  );
}

export default App;
