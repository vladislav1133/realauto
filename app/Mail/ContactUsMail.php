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


    public function __construct($tel, $name)
    {
        $this->tel = $tel;
        $this->email = $name;
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
                'email' => $this->name
            ])
            ->subject('Realauto новый заказ');
    }
}
