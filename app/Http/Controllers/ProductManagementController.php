<?php

namespace App\Http\Controllers;

use App\Models\Service;
use Illuminate\Http\Request;
use Inertia\Inertia;


class ProductManagementController extends Controller
{
    public function indexp(Request $request)
    {
        return Inertia::render('ProductManagement/Product');
    }
    
    public function indexs(Request $request)
    {
        $id = Service::max('id');
        return Inertia::render('ProductManagement/Service', [
            'id' => $id,
        ]);
    }
}
