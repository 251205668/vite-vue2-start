import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld";
@Component
export default class Home extends Vue {
  private render() {
    return (
      <div class="home">
        <img alt="Vue logo" src="../src/assets/logo.png" />
        <HelloWorld msg="Welcome to Your Vue.js + TypeScript App （TSX Support）" />
      </div>
    );
  }
}
