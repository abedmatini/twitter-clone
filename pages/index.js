import Tweet from "@/Tweet";
import path from "path";
import fs from "fs";

export default function Home( {tweets} ){
  return (
    <div className="{styles.container}">
      <h1>Hello, world!</h1>
      {tweets.map(tweet => <Tweet Key = {tweet.id} text={tweet.text} author={tweet.author} data={tweet.date} />)}
    </div>
  )
}

export async function getServerSideProps() {
  const filepath1 = path.join(process.cwd(), 'data.json')
  const tweets1 = JSON.parse(fs.readFileSync(filepath1))
  const filepath2 = path.join(process.cwd(), 'data2.json')
  const tweets2 = JSON.parse(fs.readFileSync(filepath2))

  const tweets = tweets1.concat(tweets2)
  return {
    props: {
      tweets
    }
  }
  
}