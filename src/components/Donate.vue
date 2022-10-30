<template>
    <div class="text-center justify-center">
        <h2 class="text-6xl text-bold mt-8 mb-6">
        Donate
        </h2>
        <br />
        <br />
        <br />
        <h2>
            <div class="font-franklin">
                <label for="last_name" class="text-3xl text-semibold"
                    >Amount</label
                >
                <div class="font-franklin money">
                    <input
                        id="last_name"
                        type="number"
                        class="form-control bg-slate-500 w-2/12 h-8 min-w-[100px] text-3xl text-right"
                        name="last_name"
                        value
                        required
                        autofocus
                        v-model="amount"
                    />
                </div>
                <h1 class="text-sm p-4">
                    We recieve ${{processFees(amount).toFixed(2)}} after fees!
                </h1>
            </div>
            <h2 class="text-lg text-green-300 ">
                {{this.message}}
            </h2>
            <!-- <q-btn -->
            <!--     color="primary" -->
            <!--     size="small" -->
            <!--     text-color="black" -->
            <!--     label="Submit" -->
            <!--     v-on:click="testcount" -->
            <!-- /> -->
        </h2>
        <h2>
            <div id="paypal-buttons" />
        </h2>
    </div>
</template>

<script>
export default {
    data() {
        return {
            amount: 5.0,
            paid: 0.0,
            paypal: undefined,
            message: "",
        };
    },
    mounted() {
        const script = document.createElement("script");
        script.setAttribute("data-namespace", "paypal_sdk");
        script.src =
            "paypal";
        script.addEventListener("load", this.setLoaded);
        document.body.appendChild(script);
    },
    methods: {
        processFees: function() {
            if ("number" != typeof this.amount) {
                return 0;
            }
            // handle the different fees from paypal
            // https://www.paypal.com/us/webapps/mpp/paypal-fees
            if (this.amount < 1 || !this.amount) {
                return 0;
            }
            if (this.amount < 4.99) {
                return this.amount - 0.49;
            } else if (this.amount < 24.99) {
                return this.amount - 0.99;
            } else if (this.amount < 74.99) {
                return this.amount - 1.99;
            } else if (this.amount < 200.0) {
                return this.amount - 2.49;
            } else if (this.amount < 1000.0){
                return this.amount - this.amount * 0.018;
            } else {
                return this.amount - this.amount * 0.015;
            }
        },
        testcount: function() {
            this.message = `Thank you for your generous donation of $${this.amount.toFixed(2)}`;
            this.amount = 0;
        },
        setLoaded: function () {
            this.paypal = paypal_sdk.Buttons({
                createOrder: (_data, actions) => {
                    return actions.order.create({
                        purchase_units: [
                            {
                                description: `Donation to CircuitRunners for ${this.amount}`,
                                amount: {
                                    currency_code: "USD",
                                    value: this.amount,
                                },
                            },
                        ],
                    });
                },
                onApprove: async (_data, actions) => {
                    const order = await actions.order.capture();
                    const _status = order.status;
                    this.message = `Thank you for your generous donation of $${this.amount.toFixed(2)}!`;
                    this.amount = 0;
                },
                onError: (_) => {
                    return;
                },
            });
            this.paypal.render("#paypal-buttons");
        },
    }
};
</script>

<style>
.containerwrap {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
    font-size: medium;
}

.money input[type=number]::-webkit-inner-spin-button,
.money input[type=number]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.middle {
    display: flex;
    flex-wrap: wrap;
    align-content: center;
}

.nooverflow {
    overflow-x: hidden;
}

.borderw {
    border: 4px solid #515155;
}
</style>

<!--https://quasar.dev/vue-components/menu-->
