print('hello')
from flask import Flask, render_template, request, redirect 

app=Flask(__name__)

@app.route("/")
@app.route("/Home")
def home():
	return render_template("projects.html")

@app.route("/Address")
def address():
	return render_template("address.html")
	

@app.route("/Weather")
def weather():
	return render_template("weather.html")

@app.route("/Cart")
def cart():
	return render_template("cart.html")


@app.route("/Github")
def github():
	return render_template("github_users.html")

@app.route("/StonePaperScissor")
def StonePaperScissor():
	return render_template("stonepaperscissor.html")

@app.route("/Toss")
def toss():
	return render_template("toss.html")

@app.route("/Dice")
def dice():
	return render_template("dice.html")


@app.route("/Parking")
def parking():
	return render_template("parking.html")


@app.route("/Colors")
def colors():
	return render_template("colors.html")




# Fibonacci App

def get_term(n1, n2 ,N): 

	temp=0
	if N==1:
	    print(n1)
	    return n1    
	else:
	    for i in range(3,N+1,1):
	        temp=n2
	        n2=temp+n1
	        n1=temp
	        
	        
	    print(n2)
	    return n2
	



@app.route("/FibonacciApp", methods=["GET","POST"])
def fib():
	if request.method=="POST":
		try:
			f=int(request.form["first"])
			s=int(request.form["second"])
			q=int(request.form["quantity"])
			a=get_term(f,s,q)
			return render_template("home_fibonacci.html",ans=a, n_value=q)

		except:
			return "Something went wrong. Please try different values"


	a=0
	q=""
	return render_template("home_fibonacci.html",ans=a, n_value=q)


@app.route("/AboutFibonacci")
def about():
	return render_template("about_fibonacci.html")


# End


app.run(debug=True)
