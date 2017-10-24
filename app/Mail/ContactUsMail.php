<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class ContactUsMail extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     *
     * @return void
     */

    protected $tel;
    protected $name;
    protected $mess;
    protected $favoriteCars;


    public function __construct($tel, $name, $mess = false, $favoriteCars = false)
    {
        $this->tel = $tel;
        $this->name = $name;
        $this->mess = $mess;
        $this->favoriteCars = $favoriteCars;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->view(env('THEME').'.mails.contactUs')
            ->with([
                'tel' => $this->tel,
                'name' => $this->name,
                'mess' => $this->mess,
                'favoriteCars' => $this->favoriteCars
            ])
            ->subject('Realauto новый заказ');
    }
}
