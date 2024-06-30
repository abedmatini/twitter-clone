import Tweet from "@/Tweet";

export default function Home(){
  return (
    <div className="{styles.container}">
      <h1>Hello, world!</h1>
      <Tweet text="passed down prop" author='Abed' date='30/06' />
    </div>
  )
}