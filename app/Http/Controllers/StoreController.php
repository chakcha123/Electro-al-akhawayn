<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use App\Models\Service;
use Inertia\Inertia;

class StoreController extends Controller
{
    public function products(Request $request)
    {
        $products = Product::paginate(8);
        return Inertia::render('store/CardContainer', [
            'products' => $products
        ]);
    }
    public function services(Request $request)
    {
        $services = Service::paginate(8);
        return Inertia::render('Services/CardContainer', [
            'services' => $services,
        ]);
    }

    public function home(Request $request)
    {
        $services = Service::paginate(8);
        $products = Product::paginate(8);

        return Inertia::render('home', [
            'services' => $services,
            'products' => $products
        ]);
    }

}
