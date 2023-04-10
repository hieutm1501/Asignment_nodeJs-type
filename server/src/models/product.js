import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";
const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
        },
        image: {
            type: String
        },
        price: {
            type: Number,
        },
        sell_price: {
            type: Number
        },
        mota: {
            type: String
        },
        dacdiem: {
            type: String
        },
        categoryId: {
            type: mongoose.Types.ObjectId,
            ref: "Category",
        },
        chitiet: {
            type: String
        }
    },
    { timestamps: true, versionKey: false }

);

productSchema.plugin(mongoosePaginate)
export default mongoose.model("Product", productSchema);