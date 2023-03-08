import { mount } from "@vue/test-utils";
import Contador  from "@/components/Contador.vue";
   test("Validar msg",()=>{
        const wrapper= mount(Contador);
        console.log(wrapper.find('h1').text());
        expect(wrapper.find('h1').text()).toBe("Counter: 1");
    });