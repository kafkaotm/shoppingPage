let data = {
  sec: 70,
  condition: null,
  buy: "購買",
  amount: 10,
  buyAmount: 5,
  preorder: false,
  preorderAmount: 0,
  preorderConfirm: 0,
  noModal: true
};

new Vue({
  el: "#app",
  data: data,
  methods: {
    countDown() {
      setInterval(() => {
        if (this.sec) {
          this.sec--;
        }
      }, 1000);
      console.log(this.sec);
    },
    btnM() {
      if (this.buyAmount > 0 && this.preorder === false) {
        this.buyAmount--;
      } else if (this.preorderAmount > 0 && this.preorder === true) {
        this.preorderAmount--;
      }
    },
    btnA() {
      if (this.buyAmount < this.amount && this.preorder === false) {
        this.buyAmount++;
      } else if (this.preorderAmount < 99 && this.preorder === true) {
        this.preorderAmount++;
      }
    },
    calBuy() {
      if (this.amount - this.buyAmount >= 0 && this.preorder === false) {
        (this.amount = this.amount - this.buyAmount),
          (this.buyAmount = this.amount),this.noModal=true;
      } else if (this.preorder === true) {
        this.preorderConfirm = this.preorderConfirm + this.preorderAmount,this.noModal=true;
      }
    }
  },
  mounted() {
    this.countDown();
  },
  computed: {
    btnColor() {
      if (this.sec >= 60) {
        return (this.condition = "green");
      }
      if (this.sec < 60 && this.sec >= 1) {
        return (this.condition = "orange");
      } else {
        return (this.condition = "gray");
      }
    },
    buyStatus() {
      if (this.sec >= 1 && this.amount >= 1) {
        return this.buy;
      }
      if (this.sec < 1) {
        this.noModal=true;
        return (this.buy = "停售");
      }
      if (this.amount < 1) {
        this.preorder = true;
        return (this.buy = "預購");
      }
    }
  }
});
