<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\Service;

use Cart;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CartController extends Controller
{

    public function viewCart()
    {
        $cart = Cart::getContent();

        return Inertia::render('ShoppingCard',[
            'cart' => $cart
        ]);
    }

    public function addToCart($id)
    {
        $product = Product::findOrFail($id);

        \Cart::add([
            'id' => $product->id,
            'name' => $product->name,
            'price' => $product->price,
            'quantity' => 1,
            'attributes' => [
                'image' => $product->image,
                'description' => $product->description,
            ],
        ]);

        return redirect()->back();
    }

       //---------------------- service ---------------------------

       public function addServToCart($id)
    {
        // $service = Service::findOrFail($id);
        $service = Service::where('sid', $id)->firstOrFail();
        \Cart::add([
            'id' => $service->sid,
            'name' => $service->name,
            'price' => $service->price,
            'quantity' => 1,
            'attributes' => [
                'description' => $service->description,
            ],
        ]);
        return redirect()->back();
    }



    public function removeCart($id)
    {
        \Cart::remove($id);
        return redirect()->route('cart.view');
    }

    public function Decrease($id)
    {
        $item = \Cart::get($id);

        if ($item && $item->quantity > 1) {
            \Cart::update($id, [
                'quantity' => [
                    'relative' => true,
                    'value' => -1,
                ],
            ]);
        } else {
            \Cart::remove($id);
        }

        return redirect()->route('cart.view');
    }


    public function Increase($id)
    {
        \Cart::update($id, [
            'quantity' => [
                'relative' => true,
                'value' => 1,
            ],
        ]);

        return redirect()->route('cart.view');
    }


    public function clearAllCart()
    {
        Cart::clear();
        return redirect()->route('cart.view');
    }

}

