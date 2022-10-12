
import { Safir, On } from "../index";
import MyList from "./components/my-list";
import MyHeader from "./layouts/heder";

let app  = new Safir();
app.loadVanillaComp("vanilla-components/footer.html");

// window.app = app;
let myBoxComp, myHeader;

On("app.ready", () => {
  myHeader = app.loadComponent(new MyHeader('my-header'));
  myBoxComp = app.loadComponent(new MyList('my-box-custom'), 'myScroll');
  console.info("Application running demo2 [ready]...", Date.now());
  // Exsposed to the global scope for testing in console!
  window.myBoxComp = myBoxComp
  // myBoxComp.set('tableData', ['wao', 'woow'])
});

On("my-box-custom", (r) => {
  console.info("Application On ver-box custom integrated dom element, click event attached.", r);
  alert(" List item clicked => " + r.path[0].innerHTML);
});
