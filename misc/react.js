<Route path="/public" component={Public}/>
<Route path={to} exact={activeOnlyWhenExact} children={({ match }) => (
    <div className={match ? 'active' : ''}>
      {match ? '> ' : ''}<Link to={to}>{label}</Link>
    </div>
  )}/>
<Route {...rest} render={props => (
  fakeAuth.isAuthenticated ? (
    <Component {...props}/>
  ) : (
    <Redirect to={{
      pathname: '/login',
      state: { from: props.location }
    }}/>
  )
)}/>
