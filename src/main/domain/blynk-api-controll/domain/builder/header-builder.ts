class HeaderBuilder {
    build(){
       const header = {
          "Content-Type":"application/json"
       }

       return header
    }
}

export default new HeaderBuilder()