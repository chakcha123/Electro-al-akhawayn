<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ContactController extends Controller
{
    public function index (){
        return Inertia::render('ContactUs');
    }
    public function create (Request $request){
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|max:255',
            'number' => 'string',
            'message' => 'required|string',
        ]);

        Contact::create($validatedData);
        return redirect()->route('contact.view');

    }

}
